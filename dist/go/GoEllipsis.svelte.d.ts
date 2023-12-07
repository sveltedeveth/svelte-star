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
export type GoEllipsisProps = typeof __propDef.props;
export type GoEllipsisEvents = typeof __propDef.events;
export type GoEllipsisSlots = typeof __propDef.slots;
export default class GoEllipsis extends SvelteComponentTyped<GoEllipsisProps, GoEllipsisEvents, GoEllipsisSlots> {
}
export {};
