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
export type GiBeeProps = typeof __propDef.props;
export type GiBeeEvents = typeof __propDef.events;
export type GiBeeSlots = typeof __propDef.slots;
export default class GiBee extends SvelteComponentTyped<GiBeeProps, GiBeeEvents, GiBeeSlots> {
}
export {};
