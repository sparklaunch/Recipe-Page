import Image from "next/image";
import omelette from "./assets/images/omelette.jpeg";
import styles from "./Home.module.css";

export default function Home() {
	return (
		<>
			<Image src={omelette} alt="Omelette" className={styles.omelette} />
			<h1 className={styles.header}>Simple Omelette Recipe</h1>
			<p className={styles.headerText}>
				An easy and quick dish, perfect for any meal. This classic
				omelette combines beaten eggs cooked to perfection, optionally
				filled with your choice of cheese, vegetables, or meats.
			</p>
			<article className={styles.preparationTime}>
				<h2 className={styles.preparationTimeHeader}>
					Preparation Time
				</h2>
				<ul className={styles.preparationTimeList}>
					<li className={styles.preparationTimeListItem}>
						<span className={styles.preparationTimeListItemTitle}>
							Total:
						</span>
						&nbsp; Approximately 10 minutes
					</li>
					<li className={styles.preparationTimeListItem}>
						<span className={styles.preparationTimeListItemTitle}>
							Preparation:
						</span>
						&nbsp; 5 minutes
					</li>
					<li className={styles.preparationTimeListItem}>
						<span className={styles.preparationTimeListItemTitle}>
							Cooking:
						</span>
						&nbsp; 5 minutes
					</li>
				</ul>
			</article>
			<section>
				<h2 className={styles.ingredientsHeader}>Ingredients</h2>
				<ul className={styles.ingredientsList}>
					<li className={styles.ingredientsListItem}>
						2~3 large eggs
					</li>
					<li className={styles.ingredientsListItem}>
						Salt, to taste
					</li>
					<li className={styles.ingredientsListItem}>
						Pepper, to taste
					</li>
					<li className={styles.ingredientsListItem}>
						1 tablespoon of butter or oil
					</li>
					<li className={styles.ingredientsListItem}>
						Optional fillings: cheese, diced vegetables, cooked
						meats, herbs
					</li>
				</ul>
			</section>
			<hr className={styles.horizontalLine} />
			<section>
				<h2 className={styles.instructionsHeader}>Instructions</h2>
				<ol className={styles.instructionsList}>
					<li className={styles.instructionsListItem}>
						<span className={styles.instructionsListItemTitle}>
							Beat the eggs:
						</span>
						&nbsp;In a bowl, beat the eggs with a pinch of salt and
						pepper until they are well mixed. You can add a
						tablespoon of water or milk for a fluffier texture.
					</li>
					<li className={styles.instructionsListItem}>
						<span className={styles.instructionsListItemTitle}>
							Heat the pan:
						</span>
						&nbsp;Place a non-stick frying pan over medium heat and
						add butter or oil.
					</li>
					<li className={styles.instructionsListItem}>
						<span className={styles.instructionsListItemTitle}>
							Cook the omelette:
						</span>
						&nbsp;Once the butter is melted and bubbling, pour in
						the eggs. Tilt the pan to ensure the eggs evenly coat
						the surface.
					</li>
					<li className={styles.instructionsListItem}>
						<span className={styles.instructionsListItemTitle}>
							Add fillings (optional):
						</span>
						&nbsp;When the eggs begin to set at the edges but are
						still slightly runny in the middle, sprinkle your chosen
						fillings over one half of the omelette.
					</li>
					<li className={styles.instructionsListItem}>
						<span className={styles.instructionsListItemTitle}>
							Fold and serve:
						</span>
						&nbsp;As the omelette continues to cook, carefully lift
						one edge and fold it over the fillings. Let it cook for
						another minute, then slide it onto a plate.
					</li>
					<li className={styles.instructionsListItem}>
						<span className={styles.instructionsListItemTitle}>
							Enjoy:
						</span>
						&nbsp;Serve hot, with additional salt and pepper if
						needed.
					</li>
				</ol>
			</section>
			<hr className={styles.horizontalLine} />
			<section>
				<h2 className={styles.nutritionHeader}>Nutrition</h2>
				<p className={styles.nutritionText}>
					The table below shows nutritional values per serving without
					the additional fillings.
				</p>
				<article className={styles.nutritionTable}>
					<h3 className={styles.nutritionTableTitle}>Calories</h3>
					<p className={styles.nutritionTableText}>277kcal</p>
					<h3 className={styles.nutritionTableTitle}>Carbs</h3>
					<p className={styles.nutritionTableText}>0g</p>
					<h3 className={styles.nutritionTableTitle}>Protein</h3>
					<p className={styles.nutritionTableText}>20g</p>
					<h3 className={styles.nutritionTableTitle}>Fat</h3>
					<p className={styles.nutritionTableText}>22g</p>
				</article>
			</section>
		</>
	);
}
