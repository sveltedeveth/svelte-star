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
export type DiNginxProps = typeof __propDef.props;
export type DiNginxEvents = typeof __propDef.events;
export type DiNginxSlots = typeof __propDef.slots;
export default class DiNginx extends SvelteComponentTyped<DiNginxProps, DiNginxEvents, DiNginxSlots> {
}
export {};
