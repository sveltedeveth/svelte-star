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
export type TiBeakerProps = typeof __propDef.props;
export type TiBeakerEvents = typeof __propDef.events;
export type TiBeakerSlots = typeof __propDef.slots;
export default class TiBeaker extends SvelteComponentTyped<TiBeakerProps, TiBeakerEvents, TiBeakerSlots> {
}
export {};
