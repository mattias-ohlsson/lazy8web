<?php
/*
*    This is Lazy8Web, a book-keeping ledger program for professionals
*    Copyright (C) 2010  Thomas Dilts                                 
*
*    This program is free software: you can redistribute it and/or modify
*    it under the terms of the GNU General Public License as published by
*    the Free Software Foundation, either version 3 of the License, or   
*    (at your option) any later version.                                 
*
*    This program is distributed in the hope that it will be useful,
*    but WITHOUT ANY WARRANTY; without even the implied warranty of 
*    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the  
*    GNU General Public License for more details.                   
*
*    You should have received a copy of the GNU General Public License
*    along with this program.  If not, see <http://www.gnu.org/licenses/>.
*
*/
$this->breadcrumbs=array(
	'Templates'=>array('index'),
	'Create',
);
?>
<div class="actionBar">
[<?php echo CHtml::link(Yii::t('lazy8','Manage Templates'),array('admin')); ?>]
</div>


<h1><?php echo Yii::t('lazy8','Create Template'); ?></h1>

<?php echo $this->renderPartial('_form', array('model'=>$model,'update'=>$update)); ?>