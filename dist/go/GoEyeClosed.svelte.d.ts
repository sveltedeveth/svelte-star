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
export type GoEyeClosedProps = typeof __propDef.props;
export type GoEyeClosedEvents = typeof __propDef.events;
export type GoEyeClosedSlots = typeof __propDef.slots;
export default class GoEyeClosed extends SvelteComponentTyped<GoEyeClosedProps, GoEyeClosedEvents, GoEyeClosedSlots> {
}
export {};
