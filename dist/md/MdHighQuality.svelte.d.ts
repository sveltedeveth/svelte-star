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
export type MdHighQualityProps = typeof __propDef.props;
export type MdHighQualityEvents = typeof __propDef.events;
export type MdHighQualitySlots = typeof __propDef.slots;
export default class MdHighQuality extends SvelteComponentTyped<MdHighQualityProps, MdHighQualityEvents, MdHighQualitySlots> {
}
export {};
