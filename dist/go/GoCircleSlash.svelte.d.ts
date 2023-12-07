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
export type GoCircleSlashProps = typeof __propDef.props;
export type GoCircleSlashEvents = typeof __propDef.events;
export type GoCircleSlashSlots = typeof __propDef.slots;
export default class GoCircleSlash extends SvelteComponentTyped<GoCircleSlashProps, GoCircleSlashEvents, GoCircleSlashSlots> {
}
export {};
