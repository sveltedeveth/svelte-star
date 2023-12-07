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
export type GoSquirrelProps = typeof __propDef.props;
export type GoSquirrelEvents = typeof __propDef.events;
export type GoSquirrelSlots = typeof __propDef.slots;
export default class GoSquirrel extends SvelteComponentTyped<GoSquirrelProps, GoSquirrelEvents, GoSquirrelSlots> {
}
export {};
