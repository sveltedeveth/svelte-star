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
export type TiMailProps = typeof __propDef.props;
export type TiMailEvents = typeof __propDef.events;
export type TiMailSlots = typeof __propDef.slots;
export default class TiMail extends SvelteComponentTyped<TiMailProps, TiMailEvents, TiMailSlots> {
}
export {};
