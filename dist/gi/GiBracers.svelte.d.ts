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
export type GiBracersProps = typeof __propDef.props;
export type GiBracersEvents = typeof __propDef.events;
export type GiBracersSlots = typeof __propDef.slots;
export default class GiBracers extends SvelteComponentTyped<GiBracersProps, GiBracersEvents, GiBracersSlots> {
}
export {};
