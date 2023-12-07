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
export type MdFlipToFrontProps = typeof __propDef.props;
export type MdFlipToFrontEvents = typeof __propDef.events;
export type MdFlipToFrontSlots = typeof __propDef.slots;
export default class MdFlipToFront extends SvelteComponentTyped<MdFlipToFrontProps, MdFlipToFrontEvents, MdFlipToFrontSlots> {
}
export {};
