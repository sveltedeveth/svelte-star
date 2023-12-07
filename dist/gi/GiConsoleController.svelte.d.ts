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
export type GiConsoleControllerProps = typeof __propDef.props;
export type GiConsoleControllerEvents = typeof __propDef.events;
export type GiConsoleControllerSlots = typeof __propDef.slots;
export default class GiConsoleController extends SvelteComponentTyped<GiConsoleControllerProps, GiConsoleControllerEvents, GiConsoleControllerSlots> {
}
export {};
