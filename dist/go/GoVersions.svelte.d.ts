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
export type GoVersionsProps = typeof __propDef.props;
export type GoVersionsEvents = typeof __propDef.events;
export type GoVersionsSlots = typeof __propDef.slots;
export default class GoVersions extends SvelteComponentTyped<GoVersionsProps, GoVersionsEvents, GoVersionsSlots> {
}
export {};
