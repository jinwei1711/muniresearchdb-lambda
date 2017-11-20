<template>
	<div>
		<h1>Edit Credit</h1>
		<form>
			<div>
				<label>Credit Name</label>
				<input type="text" id="credit-name" required>
			</div>
			<div>
				<label>State</label>
				<input type="text" name="" required placeholder="State Code Only. Example: MN or IL">
			</div>
			<div>
				<label>Sector</label>
				<select>
					<option value="go">GO</option>
					<option value="rev-healhcare">Rev - Healthcare</option>
					<option>Rev - W&amp;S</option>
					<option>Rev - Electric</option>
					<option>Rev - Higher Education</option>
					<option>Rev - Special Tax</option>
				</select>
			</div>
			<div>
				<label>Fiscal Year End</label>
				<input type="month" name="" required>
			</div>
			<div>
				<label>Bloomberg Equity Ticker</label>
				<input type="text" name="" required>
			</div>
			<div>
				<button>Save</button>
				<button>Cancel</button>
			</div>			
		</form>
	</div>
</template>