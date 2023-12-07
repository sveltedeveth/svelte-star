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
export type GiBeltBucklesProps = typeof __propDef.props;
export type GiBeltBucklesEvents = typeof __propDef.events;
export type GiBeltBucklesSlots = typeof __propDef.slots;
export default class GiBeltBuckles extends SvelteComponentTyped<GiBeltBucklesProps, GiBeltBucklesEvents, GiBeltBucklesSlots> {
}
export {};
