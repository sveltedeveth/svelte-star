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
export type GiBirdTwitterProps = typeof __propDef.props;
export type GiBirdTwitterEvents = typeof __propDef.events;
export type GiBirdTwitterSlots = typeof __propDef.slots;
export default class GiBirdTwitter extends SvelteComponentTyped<GiBirdTwitterProps, GiBirdTwitterEvents, GiBirdTwitterSlots> {
}
export {};
