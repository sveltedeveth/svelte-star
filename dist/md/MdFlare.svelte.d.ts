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
export type MdFlareProps = typeof __propDef.props;
export type MdFlareEvents = typeof __propDef.events;
export type MdFlareSlots = typeof __propDef.slots;
export default class MdFlare extends SvelteComponentTyped<MdFlareProps, MdFlareEvents, MdFlareSlots> {
}
export {};
