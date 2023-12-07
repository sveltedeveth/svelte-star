import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type MdBrandingWatermarkProps = typeof __propDef.props;
export type MdBrandingWatermarkEvents = typeof __propDef.events;
export type MdBrandingWatermarkSlots = typeof __propDef.slots;
export default class MdBrandingWatermark extends SvelteComponentTyped<MdBrandingWatermarkProps, MdBrandingWatermarkEvents, MdBrandingWatermarkSlots> {
}
export {};
