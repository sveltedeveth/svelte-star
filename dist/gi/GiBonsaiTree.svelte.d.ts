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
export type GiBonsaiTreeProps = typeof __propDef.props;
export type GiBonsaiTreeEvents = typeof __propDef.events;
export type GiBonsaiTreeSlots = typeof __propDef.slots;
export default class GiBonsaiTree extends SvelteComponentTyped<GiBonsaiTreeProps, GiBonsaiTreeEvents, GiBonsaiTreeSlots> {
}
export {};
