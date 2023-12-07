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
export type GoOctofaceProps = typeof __propDef.props;
export type GoOctofaceEvents = typeof __propDef.events;
export type GoOctofaceSlots = typeof __propDef.slots;
export default class GoOctoface extends SvelteComponentTyped<GoOctofaceProps, GoOctofaceEvents, GoOctofaceSlots> {
}
export {};
