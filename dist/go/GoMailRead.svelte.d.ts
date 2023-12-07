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
export type GoMailReadProps = typeof __propDef.props;
export type GoMailReadEvents = typeof __propDef.events;
export type GoMailReadSlots = typeof __propDef.slots;
export default class GoMailRead extends SvelteComponentTyped<GoMailReadProps, GoMailReadEvents, GoMailReadSlots> {
}
export {};
