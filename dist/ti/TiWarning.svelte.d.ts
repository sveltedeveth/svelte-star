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
export type TiWarningProps = typeof __propDef.props;
export type TiWarningEvents = typeof __propDef.events;
export type TiWarningSlots = typeof __propDef.slots;
export default class TiWarning extends SvelteComponentTyped<TiWarningProps, TiWarningEvents, TiWarningSlots> {
}
export {};
