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
export type DiMysqlProps = typeof __propDef.props;
export type DiMysqlEvents = typeof __propDef.events;
export type DiMysqlSlots = typeof __propDef.slots;
export default class DiMysql extends SvelteComponentTyped<DiMysqlProps, DiMysqlEvents, DiMysqlSlots> {
}
export {};
