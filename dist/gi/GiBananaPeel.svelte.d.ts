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
export type GiBananaPeelProps = typeof __propDef.props;
export type GiBananaPeelEvents = typeof __propDef.events;
export type GiBananaPeelSlots = typeof __propDef.slots;
export default class GiBananaPeel extends SvelteComponentTyped<GiBananaPeelProps, GiBananaPeelEvents, GiBananaPeelSlots> {
}
export {};
