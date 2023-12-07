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
export type GiPizzaCutterProps = typeof __propDef.props;
export type GiPizzaCutterEvents = typeof __propDef.events;
export type GiPizzaCutterSlots = typeof __propDef.slots;
export default class GiPizzaCutter extends SvelteComponentTyped<GiPizzaCutterProps, GiPizzaCutterEvents, GiPizzaCutterSlots> {
}
export {};
