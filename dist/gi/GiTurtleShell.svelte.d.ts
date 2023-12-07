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
export type GiTurtleShellProps = typeof __propDef.props;
export type GiTurtleShellEvents = typeof __propDef.events;
export type GiTurtleShellSlots = typeof __propDef.slots;
export default class GiTurtleShell extends SvelteComponentTyped<GiTurtleShellProps, GiTurtleShellEvents, GiTurtleShellSlots> {
}
export {};
