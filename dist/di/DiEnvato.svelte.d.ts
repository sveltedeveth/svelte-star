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
export type DiEnvatoProps = typeof __propDef.props;
export type DiEnvatoEvents = typeof __propDef.events;
export type DiEnvatoSlots = typeof __propDef.slots;
export default class DiEnvato extends SvelteComponentTyped<DiEnvatoProps, DiEnvatoEvents, DiEnvatoSlots> {
}
export {};
