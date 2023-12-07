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
export type GiVomitingProps = typeof __propDef.props;
export type GiVomitingEvents = typeof __propDef.events;
export type GiVomitingSlots = typeof __propDef.slots;
export default class GiVomiting extends SvelteComponentTyped<GiVomitingProps, GiVomitingEvents, GiVomitingSlots> {
}
export {};
