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
export type GiBullseyeProps = typeof __propDef.props;
export type GiBullseyeEvents = typeof __propDef.events;
export type GiBullseyeSlots = typeof __propDef.slots;
export default class GiBullseye extends SvelteComponentTyped<GiBullseyeProps, GiBullseyeEvents, GiBullseyeSlots> {
}
export {};
