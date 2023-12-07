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
export type GiBananaBunchProps = typeof __propDef.props;
export type GiBananaBunchEvents = typeof __propDef.events;
export type GiBananaBunchSlots = typeof __propDef.slots;
export default class GiBananaBunch extends SvelteComponentTyped<GiBananaBunchProps, GiBananaBunchEvents, GiBananaBunchSlots> {
}
export {};
