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
export type DiRedisProps = typeof __propDef.props;
export type DiRedisEvents = typeof __propDef.events;
export type DiRedisSlots = typeof __propDef.slots;
export default class DiRedis extends SvelteComponentTyped<DiRedisProps, DiRedisEvents, DiRedisSlots> {
}
export {};
