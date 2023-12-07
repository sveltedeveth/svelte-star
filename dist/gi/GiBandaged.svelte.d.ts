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
export type GiBandagedProps = typeof __propDef.props;
export type GiBandagedEvents = typeof __propDef.events;
export type GiBandagedSlots = typeof __propDef.slots;
export default class GiBandaged extends SvelteComponentTyped<GiBandagedProps, GiBandagedEvents, GiBandagedSlots> {
}
export {};
