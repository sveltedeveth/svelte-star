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
export type DiMongodbProps = typeof __propDef.props;
export type DiMongodbEvents = typeof __propDef.events;
export type DiMongodbSlots = typeof __propDef.slots;
export default class DiMongodb extends SvelteComponentTyped<DiMongodbProps, DiMongodbEvents, DiMongodbSlots> {
}
export {};
