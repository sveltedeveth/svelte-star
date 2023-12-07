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
export type DiSqlliteProps = typeof __propDef.props;
export type DiSqlliteEvents = typeof __propDef.events;
export type DiSqlliteSlots = typeof __propDef.slots;
export default class DiSqllite extends SvelteComponentTyped<DiSqlliteProps, DiSqlliteEvents, DiSqlliteSlots> {
}
export {};
