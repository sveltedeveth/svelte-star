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
export type GoGrabberProps = typeof __propDef.props;
export type GoGrabberEvents = typeof __propDef.events;
export type GoGrabberSlots = typeof __propDef.slots;
export default class GoGrabber extends SvelteComponentTyped<GoGrabberProps, GoGrabberEvents, GoGrabberSlots> {
}
export {};
