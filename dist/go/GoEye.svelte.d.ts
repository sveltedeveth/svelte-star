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
export type GoEyeProps = typeof __propDef.props;
export type GoEyeEvents = typeof __propDef.events;
export type GoEyeSlots = typeof __propDef.slots;
export default class GoEye extends SvelteComponentTyped<GoEyeProps, GoEyeEvents, GoEyeSlots> {
}
export {};
