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
export type GiFujiProps = typeof __propDef.props;
export type GiFujiEvents = typeof __propDef.events;
export type GiFujiSlots = typeof __propDef.slots;
export default class GiFuji extends SvelteComponentTyped<GiFujiProps, GiFujiEvents, GiFujiSlots> {
}
export {};
