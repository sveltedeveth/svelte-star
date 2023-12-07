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
export type GiFissionProps = typeof __propDef.props;
export type GiFissionEvents = typeof __propDef.events;
export type GiFissionSlots = typeof __propDef.slots;
export default class GiFission extends SvelteComponentTyped<GiFissionProps, GiFissionEvents, GiFissionSlots> {
}
export {};
