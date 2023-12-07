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
export type GiBuyCardProps = typeof __propDef.props;
export type GiBuyCardEvents = typeof __propDef.events;
export type GiBuyCardSlots = typeof __propDef.slots;
export default class GiBuyCard extends SvelteComponentTyped<GiBuyCardProps, GiBuyCardEvents, GiBuyCardSlots> {
}
export {};
