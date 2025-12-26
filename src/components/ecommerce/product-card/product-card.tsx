import React from 'react';
import classNames from 'classnames';
import styles from './product-card.module.scss';
import { Link } from '../../navigation/link';

export type ProductCardProps = {
  id: string;
  title: string;
  price: number;
  discountPrice?: number;
  imageUrl: string;
  brand?: string;
  tag?: string; // เช่น "New Arrival", "Best Seller"
  isOutOfStock?: boolean;
  href: string;
  onClick?: () => void;
  onAddToCart?: (id: string) => void;
};

export function ProductCard({
  id,
  title,
  price,
  discountPrice,
  imageUrl,
  brand,
  tag,
  isOutOfStock,
  href,
  onClick,
  onAddToCart
}: ProductCardProps) {
  const hasDiscount = discountPrice !== undefined && discountPrice < price;

  const handleCartClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onAddToCart?.(id);
  };

  return (
    <div className={classNames(styles.card, { [styles.outOfStock]: isOutOfStock })}>
      <Link href={href} className={styles.linkWrapper} noStyles onClick={onClick}>
        <div className={styles.imageContainer}>
          {tag && <span className={styles.tagBadge}>{tag}</span>}
          <img src={imageUrl} alt={title} className={styles.image} />
          
          {isOutOfStock && (
            <div className={styles.overlay}>
              <span className={styles.soldOutText}>OUT OF STOCK</span>
            </div>
          )}

          {!isOutOfStock && onAddToCart && (
            <button 
              className={styles.quickAdd} 
              onClick={handleCartClick}
              aria-label="Add to cart"
            >
              <span className="mingcute--shopping-cart-1-line" />
            </button>
          )}
        </div>

        <div className={styles.content}>
          {brand && <span className={styles.brand}>{brand}</span>}
          <h3 className={styles.title}>{title}</h3>
          
          <div className={styles.priceContainer}>
            {hasDiscount ? (
              <>
                <span className={styles.discountPrice}>฿{discountPrice?.toLocaleString()}</span>
                <span className={styles.originalPrice}>฿{price.toLocaleString()}</span>
              </>
            ) : (
              <span className={styles.price}>฿{price.toLocaleString()}</span>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
}