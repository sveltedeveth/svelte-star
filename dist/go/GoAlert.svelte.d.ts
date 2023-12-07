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
export type GoAlertProps = typeof __propDef.props;
export type GoAlertEvents = typeof __propDef.events;
export type GoAlertSlots = typeof __propDef.slots;
export default class GoAlert extends SvelteComponentTyped<GoAlertProps, GoAlertEvents, GoAlertSlots> {
}
export {};
