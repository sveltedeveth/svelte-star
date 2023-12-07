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
export type GoMailProps = typeof __propDef.props;
export type GoMailEvents = typeof __propDef.events;
export type GoMailSlots = typeof __propDef.slots;
export default class GoMail extends SvelteComponentTyped<GoMailProps, GoMailEvents, GoMailSlots> {
}
export {};
