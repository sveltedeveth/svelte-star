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
export type GiBrassKnucklesProps = typeof __propDef.props;
export type GiBrassKnucklesEvents = typeof __propDef.events;
export type GiBrassKnucklesSlots = typeof __propDef.slots;
export default class GiBrassKnuckles extends SvelteComponentTyped<GiBrassKnucklesProps, GiBrassKnucklesEvents, GiBrassKnucklesSlots> {
}
export {};
