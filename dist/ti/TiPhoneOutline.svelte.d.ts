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
export type TiPhoneOutlineProps = typeof __propDef.props;
export type TiPhoneOutlineEvents = typeof __propDef.events;
export type TiPhoneOutlineSlots = typeof __propDef.slots;
export default class TiPhoneOutline extends SvelteComponentTyped<TiPhoneOutlineProps, TiPhoneOutlineEvents, TiPhoneOutlineSlots> {
}
export {};
