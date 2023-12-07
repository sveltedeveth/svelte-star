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
export type GiBananaPeeledProps = typeof __propDef.props;
export type GiBananaPeeledEvents = typeof __propDef.events;
export type GiBananaPeeledSlots = typeof __propDef.slots;
export default class GiBananaPeeled extends SvelteComponentTyped<GiBananaPeeledProps, GiBananaPeeledEvents, GiBananaPeeledSlots> {
}
export {};
