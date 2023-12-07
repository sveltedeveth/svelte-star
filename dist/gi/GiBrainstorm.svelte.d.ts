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
export type GiBrainstormProps = typeof __propDef.props;
export type GiBrainstormEvents = typeof __propDef.events;
export type GiBrainstormSlots = typeof __propDef.slots;
export default class GiBrainstorm extends SvelteComponentTyped<GiBrainstormProps, GiBrainstormEvents, GiBrainstormSlots> {
}
export {};
