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
export type TiRefreshProps = typeof __propDef.props;
export type TiRefreshEvents = typeof __propDef.events;
export type TiRefreshSlots = typeof __propDef.slots;
export default class TiRefresh extends SvelteComponentTyped<TiRefreshProps, TiRefreshEvents, TiRefreshSlots> {
}
export {};
