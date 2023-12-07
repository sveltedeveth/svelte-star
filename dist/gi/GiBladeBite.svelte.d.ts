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
export type GiBladeBiteProps = typeof __propDef.props;
export type GiBladeBiteEvents = typeof __propDef.events;
export type GiBladeBiteSlots = typeof __propDef.slots;
export default class GiBladeBite extends SvelteComponentTyped<GiBladeBiteProps, GiBladeBiteEvents, GiBladeBiteSlots> {
}
export {};
