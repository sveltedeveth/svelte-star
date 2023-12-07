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
export type GiUdderProps = typeof __propDef.props;
export type GiUdderEvents = typeof __propDef.events;
export type GiUdderSlots = typeof __propDef.slots;
export default class GiUdder extends SvelteComponentTyped<GiUdderProps, GiUdderEvents, GiUdderSlots> {
}
export {};
