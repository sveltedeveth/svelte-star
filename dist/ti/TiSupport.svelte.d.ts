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
export type TiSupportProps = typeof __propDef.props;
export type TiSupportEvents = typeof __propDef.events;
export type TiSupportSlots = typeof __propDef.slots;
export default class TiSupport extends SvelteComponentTyped<TiSupportProps, TiSupportEvents, TiSupportSlots> {
}
export {};
