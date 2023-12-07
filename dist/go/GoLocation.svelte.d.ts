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
export type GoLocationProps = typeof __propDef.props;
export type GoLocationEvents = typeof __propDef.events;
export type GoLocationSlots = typeof __propDef.slots;
export default class GoLocation extends SvelteComponentTyped<GoLocationProps, GoLocationEvents, GoLocationSlots> {
}
export {};
